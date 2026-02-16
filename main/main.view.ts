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

		@$mol_mem
		post_cards() {
			return this.posts().map((post, i) => {
				const card = new this.$.$club_card()
				card.post = () => post
				return card
			})
		}

		@$mol_mem
		pinned_cards() {
			return this.pinned().map((post, i) => {
				const card = new this.$.$club_card()
				card.post = () => post
				return card
			})
		}
	}
}
