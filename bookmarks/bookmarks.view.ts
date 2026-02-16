namespace $.$$ {
	export class $club_bookmarks extends $.$club_bookmarks {
		@$mol_mem
		data() {
			return $club_api.bookmarks()
		}

		@$mol_mem
		posts() {
			return this.data()?.posts ?? []
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
