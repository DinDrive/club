interface PostRoot {
	post: Post;
}

interface Post {
	id: string;
	url: string;
	title: string;
	content_text: string;
	date_published: string;
	date_modified: string;
	authors: Author[];
	_club: Club;
}

interface Club {
	type: string;
	slug: string;
	coauthors: any[];
	comment_count: number;
	view_count: number;
	upvotes: number;
	is_public: boolean;
	is_commentable: boolean;
}

interface Author {
	name: string;
	url: string;
	avatar: string;
}

interface CommentRoot {
	comments: Comment[];
}

interface Comment {
	id: string;
	text: string;
	author: CommentAuthor;
	reply_to_id?: string;
	upvotes: number;
	created_at: string;
}

interface CommentAuthor {
	id: string;
	slug: string;
	full_name: string;
	avatar?: string;
	bio: string;
	upvotes: number;
	created_at: string;
	membership_started_at: string;
	membership_expires_at: string;
	moderation_status: string;
	payment_status: string;
	company: string;
	position: string;
	city: string;
	country: string;
	is_active_member: boolean;
}

namespace $.$$ {
	
	export class $club_post extends $.$club_post {
		
		@ $mol_mem
		post_arg() {
			return $mol_state_arg.value( 'post' )
		}

		@ $mol_mem
		post_url() {
			if(!this.post_arg()) return ''
			return this.post_arg() + '.json'
		}

		token() {
			return $mol_state_local.value( 'token' )
		}


		@ $mol_mem
		post(next?: Post): Post | null {
			if(!this.post_url()) return null
			const link = (this.token()) ? this.post_url() + '?token=' + this.token() : this.post_url()
			if(this.post_url().includes('weekly_digest')) {
				this.embed(this.post_arg() + '?token=' + this.token())
			} else {
				this.embed('')
			}
			return next || ($mol_fetch.json( link ) as PostRoot).post
		}

		@ $mol_mem
		embed(next?: string) {
			return next || ''
		}

		upvotes() {
			return `+${this.post()?._club.upvotes}`
		}
		
		post_title(): string {
			return this.post()?.title ?? 'Вастрик Клуб'
		}

		text(): string {
			return this.post()?.content_text ?? ''
		}

		date_published() {
			return 'Создано - ' + new $mol_time_moment(this.post()?.date_published).toString( 'YYYY.MM.DD hh:mm (WeekDay)' )
		}

		date_modified() {
			return 'Отредактировано - ' + new $mol_time_moment(this.post()?.date_modified).toString( 'YYYY.MM.DD hh:mm (WeekDay)' )
		}

		list_authors() {
			return this.post()?.authors.map( ( _, i ) => this.Author( i ) ) ?? []
		}

		@ $mol_mem_key
		author_url( id: number ) {
			return this.post()?.authors[id].url ?? ''
		}

		@ $mol_mem_key
		author_name( id: number ) {
			return this.post()?.authors[id].name ?? ''
		}

		@ $mol_mem_key
		author_avatar( id: number ) {
			return this.post()?.authors[id].avatar ?? ''
		}
	}
	
}
