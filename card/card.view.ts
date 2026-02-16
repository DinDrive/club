namespace $.$$ {
	export class $club_card extends $.$club_card {
		post_data() {
			return this.post() as $club_api_post | null
		}

		post_uri() {
			const p = this.post_data()
			if (!p) return ''
			return `${p._club.type}/${p._club.slug}`
		}

		post_title() {
			const p = this.post_data()
			if (!p) return ''
			return (p._club.is_public ? '' : '\uD83D\uDD12 ') + p.title
		}

		upvotes() {
			const p = this.post_data()
			return p ? `\u25B2 ${p._club.upvotes}` : ''
		}

		author_avatar() {
			return this.post_data()?.authors?.[0]?.avatar ?? ''
		}

		author_name() {
			return this.post_data()?.authors?.[0]?.name ?? ''
		}

		comments_label() {
			const c = this.post_data()?._club?.comment_count ?? 0
			return `\uD83D\uDCAC ${c}`
		}

		type_label() {
			return this.post_data()?._club?.type ?? ''
		}
	}
}
