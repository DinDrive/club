interface Root {
	version: string
	title: string
	home_page_url: string
	feed_url: string
	next_url: string
	items: Item[]
}

interface Item {
	id: string
	url: string
	title: string
	content_text: string
	date_published: string
	date_modified: string
	authors: Author[]
	_club: Club
}

interface Club {
	type: string
	slug: string
	coauthors: any[]
	comment_count: number
	view_count: number
	upvotes: number
	is_public: boolean
	is_commentable: boolean
}

interface Author {
	name: string
	url: string
	avatar: string
}

namespace $.$$ {

	export class $club_main extends $.$club_main {

		@ $mol_mem
		page_number( next: number = 1 ) {
			return next
		}

		@ $mol_mem_key
		after( anchor_id: number = 0 ) {
			const newId = ((anchor_id + 70) / 70)
			this.page_number(Math.floor(newId))

			const feed = ( $mol_fetch.json( this.url() ) as Root )
			this.feed(feed)
			const posts = feed.items
			this.posts(this.posts().concat(posts))
			
			const newIds = []
			const startId = anchor_id || 0
			for (let i = startId; i < this.posts().length; i++) {
				newIds.push(i)
			}
			return Array.from(
				{ length: 70 },
				( _, i )=> ( anchor_id ?? 0 ) + i + 1,
			)
		}

		@ $mol_mem
		url() {
			console.log(this.page_number())
			return `https://vas3k.club/all/new/feed.json?page=${ this.page_number() }`
		}

		@ $mol_mem
		feed( next?: Root ) {
			return next || null
		}

		@ $mol_mem
		posts(next?: Item[]) {
			return next || []
		}

		list_posts() {
			return this.posts().map( ( _, i ) => this.Post( i ) )
		}

		@ $mol_mem_key
		post_upvotes( id: number ) {
			return `+${ this.posts()[ id ]?._club.upvotes }`
		}

		@ $mol_mem_key
		post_title( id: number ) {
			return `${ this.posts()[ id ]?._club.is_public ? '' : '🔒' } ${ this.posts()[ id ].title }`
		}

		@ $mol_mem_key
		post_url( id: number ) {
			const url = this.posts()[ id ].url
			return url.slice( 0, url.length - 1 )
		}

		@ $mol_mem
		logo_url() {
			return 'https://vas3k.club/static/images/logo/logo-128.png'
		}
	}
}
