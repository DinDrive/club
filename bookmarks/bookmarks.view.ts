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
