namespace $.$$ {
	export class $club_main extends $.$club_main {
		@$mol_mem
		ordering(next?: string) {
			return $club_api.feed_ordering(next)
		}

		@$mol_mem
		page(next?: number) {
			return $club_api.feed_page(next)
		}

		@$mol_mem
		feed() {
			return $club_api.feed()
		}

		@$mol_mem
		posts() {
			const items = this.feed()?.items ?? []
			return items.filter((p: any) => p._club?.type !== 'weekly_digest')
		}

		@$mol_mem
		pinned() {
			const items = this.feed()?.items ?? []
			return items.filter((p: any) => p._club?.type === 'weekly_digest')
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

		@$mol_mem
		pinned_index() {
			const index = new Map<string, $club_api_post>()
			for (const post of this.pinned()) {
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

		@$mol_mem_key
		pinned_card(key: string) {
			const card = new this.$.$club_card()
			card.post = () => this.pinned_index().get(key) ?? null as any
			return card
		}

		@$mol_mem
		post_cards() {
			return Array.from(this.posts_index().keys()).map(key => this.post_card(key))
		}

		@$mol_mem
		pinned_cards() {
			return Array.from(this.pinned_index().keys()).map(key => this.pinned_card(key))
		}
	}
}
