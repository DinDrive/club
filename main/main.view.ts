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
		page_number( next?: number ) {
			if(next)
				this.$.$mol_state_arg.value( 'page', next.toString() )
			else
				next = Number.parseInt( this.$.$mol_state_arg.value( 'page') || '1' )
			return next
		}

		@ $mol_mem
		isOpened(next?: string) {
			return next || 'all'
		}

		@ $mol_mem
		type(next?: string) {
			return next || 'all'
		}

		@ $mol_mem
		time(next?: string) {
			return next || 'new'
		}

		@ $mol_mem
		url() {
			return `https://vas3k.club/${ this.type() }/${ this.time() }/feed.json?page=${ this.page_number() }`
		}

		@ $mol_mem
		feed( next?: Root ) {
			return next || ( $mol_fetch.json( this.url() ) as Root )
		}

		@ $mol_mem
		posts(next?: Item[]) {
			return next || this.feed().items.filter((v) => {
				if(this.isOpened() === 'all') {
					return true
				} else if(this.isOpened() === 'public' && v._club.is_public) {
					return true
				} else if(this.isOpened() === 'private' && !v._club.is_public) {
					return true
				}
				return false
			})
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
