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
		posts() {
			return this.feed()?.items ?? []
		}

		@$mol_mem
		post_cards() {
			return this.posts().map(post => {
				const card = new this.$.$club_card()
				card.post = () => post
				return card
			})
		}
	}
}
