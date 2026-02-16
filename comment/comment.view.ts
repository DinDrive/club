namespace $.$$ {
	export class $club_comment extends $.$club_comment {
		comment_data() {
			return this.comment() as $club_api_comment | null
		}

		author_avatar() {
			return this.comment_data()?.author?.avatar ?? ''
		}

		author_name() {
			return this.comment_data()?.author?.full_name ?? ''
		}

		author_slug() {
			return this.comment_data()?.author?.slug ?? ''
		}

		author_position() {
			return (this.comment_data()?.author as any)?.position ?? ''
		}

		created_date() {
			const d = this.comment_data()?.created_at
			if (!d) return ''
			return new $mol_time_moment(d).toString('DD.MM.YYYY hh:mm')
		}

		upvotes_label() {
			const u = this.comment_data()?.upvotes
			return u ? `+${u}` : ''
		}

		comment_text() {
			return this.comment_data()?.text ?? ''
		}
	}
}
