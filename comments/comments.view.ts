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

		authorization() {
			return !this.token()
		}

		token() {
			return $mol_state_local.value( 'token' )
		}

		@ $mol_mem
		post_arg() {
			return $mol_state_arg.value( 'post' )
		}

		@ $mol_mem
		comments_url() {
			if( !this.authorization() ) return ''
			if( !this.post_arg() ) return ''
			return this.post_arg() + '/comments.json'
		}

		@ $mol_mem
		comments( next?: Comment[] ): Comment[] | null {
			if( !this.comments_url() ) return null
			try {
				return next || ( $mol_fetch.json( this.comments_url()+'?token='+this.token() ) as CommentRoot ).comments
			} catch( e ) {
				throw 'Нужна авторизация'
			}
		}

		list_comments() {
			return this.comments()?.map((_, i) => this.Comment(i)) ?? []
		}

		@ $mol_mem_key
		comment_text( id: number ) {
			return this.comments()?.[ id ].text ?? ''
		}

	}

}
