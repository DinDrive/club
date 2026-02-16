namespace $.$$ {
	export class $club extends $.$club {
		@$mol_mem
		authorized() {
			return Boolean($club_api.token())
		}

		@$mol_mem
		current_user_data() {
			const token = $club_api.token()
			if (!token) return null
			try {
				return $club_api.whoami()
			} catch (e) {
				if (e instanceof Promise) throw e
				return null
			}
		}

		current_user_slug() {
			return this.current_user_data()?.user?.slug ?? ''
		}

		current_user_avatar() {
			return this.current_user_data()?.user?.avatar ?? ''
		}

		@$mol_mem
		spread() {
			if (!this.authorized()) {
				return this.Settings()
			}

			const post = this.$.$mol_state_arg.value('post')
			if (post) {
				const parts = post.split('/')
				if (parts.length >= 2) {
					const page = new this.$.$club_post()
					page.post_type = () => parts[0]
					page.post_slug = () => parts[1]
					return page
				}
			}

			const user = this.$.$mol_state_arg.value('user')
			if (user) {
				const page = new this.$.$club_profile()
				page.user_slug = () => user
				return page
			}

			if (this.$.$mol_state_arg.value('bookmarks')) {
				return new this.$.$club_bookmarks()
			}

			if (this.$.$mol_state_arg.value('rooms')) {
				return new this.$.$club_rooms()
			}

			if (this.$.$mol_state_arg.value('settings')) {
				return this.Settings()
			}

			return this.Feed()
		}

		body() {
			if (!this.authorized()) {
				return [this.Settings()]
			}

			const post = this.$.$mol_state_arg.value('post')
			if (post) {
				return [this.Content()]
			}

			return [this.Main()]
		}
	}
}
