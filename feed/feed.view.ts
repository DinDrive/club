namespace $.$$ {
	export class $club_feed extends $.$club_feed {
		@$mol_mem
		page(next?: number) {
			return $club_api.feed_page(next)
		}

		@$mol_mem
		feed() {
			return $club_api.feed()
		}

		@$mol_mem
		is_top() {
			const ord = $club_api.feed_ordering()
			return ord === 'top_week' || ord === 'top_month' || ord === 'top_year'
		}

		@$mol_mem
		Ord_top() {
			const link = super.Ord_top()
			if (this.is_top()) {
				const current = $club_api.feed_ordering()
				link.arg = () => ({ ordering: current })
			}
			return link
		}

		@$mol_mem
		feed_body() {
			const parts: any[] = [this.Ordering()]
			if (this.is_top()) {
				parts.push(this.Ordering_extra())
			}
			parts.push(this.Posts())
			parts.push(this.Pager())
			return parts
		}

		@$mol_mem
		posts() {
			return (this.feed()?.items ?? []).filter((p: any) => p._club?.type !== 'weekly_digest')
		}

		post_key(post: $club_api_post) {
			const type = post._club?.type ?? 'post'
			const slug = post._club?.slug ?? post.id
			return `${type}/${slug}`
		}

		@$mol_mem
		posts_index() {
			const index = new Map<string, $club_api_post>()
			for (const post of this.posts()) {
				index.set(this.post_key(post), post)
			}
			return index
		}

		@$mol_mem_key
		post_card(key: string) {
			const card = new this.$.$club_card()
			card.post = () => this.posts_index().get(key) ?? null as any
			return card
		}

		@$mol_mem
		post_cards() {
			return Array.from(this.posts_index().keys()).map(key => this.post_card(key))
		}
	}
}
