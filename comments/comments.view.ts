interface CommentRoot {
	comments: Comment[]
}

interface Comment {
	id: string
	text: string
	author: CommentAuthor
	reply_to_id?: string
	upvotes: number
	created_at: string
}

interface CommentAuthor {
	id: string
	slug: string
	full_name: string
	avatar?: string
	bio: string
	upvotes: number
	created_at: string
	membership_started_at: string
	membership_expires_at: string
	moderation_status: string
	payment_status: string
	company: string
	position: string
	city: string
	country: string
	is_active_member: boolean
}

namespace $.$$ {

	export class $club_comments extends $.$club_comments {

		@ $mol_mem
		token() {
			return $mol_state_local.value( 'token' )
		}

		@ $mol_mem
		post_arg() {
			return $mol_state_arg.value( 'post' )
		}

		@ $mol_mem
		comments_url() {
			if( !this.post_arg() ) return ''
			return this.post_arg() + '/comments.json'
		}

		@ $mol_mem
		comments( next?: Comment[] ): Comment[] | null {
			if( !this.comments_url() ) return null
			const link = (this.token()) ? this.comments_url() + '?token=' + this.token() : this.comments_url()
			return next || ( $mol_fetch.json( link ) as CommentRoot ).comments
		}

		list_comments() {
			return this.comments()?.map((_, i) => this.Comment(i)) ?? []
		}

		@ $mol_mem_key
		comment_author( id: number ) {
			return this.comments()?.[ id ].author
		}

		@ $mol_mem_key
		comment_text( id: number ) {
			return this.comments()?.[ id ].text ?? ''
		}

		@ $mol_mem_key
		comment_author_name( id: number ) {
			return this.comments()?.[ id ].author.full_name ?? ''
		}

		@ $mol_mem_key
		comment_author_slug( id: number ) {
			return '@' + this.comments()?.[ id ].author.slug
		}

		@ $mol_mem_key
		comment_author_avatar( id: number ) {
			return this.comments()?.[ id ].author.avatar ?? ''
		}

	}

}
