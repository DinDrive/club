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
		authorization() {
			return false
		}

		post_url() {

			return decodeURI($mol_state_arg.value( 'post' ) + '.json' || '')
		}

		comments_url() {
			if(!this.authorization()) return ''
			return decodeURI($mol_state_arg.value( 'post' ) + '/comments.json' || '')
		}

		@ $mol_mem
		post(next?: Post): Post | null {
			if(!this.post_url) return null
			return next || ($mol_fetch.json( this.post_url() ) as PostRoot).post
		}

		@ $mol_mem
		comments(next?: Comment[]): Comment[] | null {
			if(!this.comments_url) return null
			try {
				return next || ($mol_fetch.json( this.comments_url() ) as CommentRoot).comments
			} catch (e) {
				throw 'Нужна авторизация'
			}
		}

		post_title(): string {
			return this.post()?.title || 'Нет заголовка'
		}

		text(): string {
			return this.post()?.content_text || 'Нет поста'
		}

		date_published() {
			return this.post()?.date_published || ''
		}

		date_modified() {
			return this.post()?.date_modified || ''
		}

		list_items() {
			return this.comments()?.map((_, i) => this.Item(i)) || []
		}

		@ $mol_mem_key
		comment_text( id: number ) {
			return this.comments()?.[id].text || ''
		}
	}
	
}
