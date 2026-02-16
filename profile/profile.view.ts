namespace $.$$ {
	export class $club_profile extends $.$club_profile {
		@$mol_mem
		data() {
			const slug = this.user_slug()
			if (!slug) return null
			return $club_api.profile(slug)
		}

		@$mol_mem
		tags_data() {
			const slug = this.user_slug()
			if (!slug) return null
			return $club_api.profile_tags(slug)
		}

		user_name() {
			return this.data()?.user?.full_name ?? ''
		}

		nickname_label() {
			return this.data()?.user?.slug ? `@${this.data()!.user.slug}` : ''
		}

		avatar_url() {
			return this.data()?.user?.avatar ?? ''
		}

		position_label() {
			const u = this.data()?.user
			if (!u) return ''
			const parts = [u.position, u.company].filter(Boolean)
			return parts.join(' — ')
		}

		location_label() {
			const u = this.data()?.user
			if (!u) return ''
			const parts = [(u as any).city, (u as any).country].filter(Boolean)
			return parts.length ? `📍 ${parts.join(', ')}` : ''
		}

		upvotes_label() {
			const u = this.data()?.user?.upvotes
			return u != null ? `+${u}` : ''
		}

		membership_label() {
			const d = this.data()?.user?.membership_started_at
			if (!d) return ''
			const m = new $mol_time_moment(d)
			const now = new $mol_time_moment()
			const my = m.year ?? 0
			const ny = now.year ?? 0
			const months = (ny - my) * 12 + ((now.month ?? 0) - (m.month ?? 0))
			if (months < 12) return `⏳ ${months} мес.`
			const years = Math.floor(months / 12)
			return `⏳ ${years} г.`
		}

		bio_text() {
			return this.data()?.user?.bio ?? ''
		}

		intro_text() {
			return (this.data()?.user as any)?.intro ?? ''
		}

		@$mol_mem
		tag_rows() {
			const tags_by_group = this.tags_data()?.tags
			if (!tags_by_group) return []
			const all_tags: $club_api_tag[] = []
			for (const group of Object.values(tags_by_group)) {
				all_tags.push(...group)
			}
			if (!all_tags.length) return []
			return all_tags.map(tag => {
				const v = new this.$.$club_tag()
				v.tag = () => tag
				return v
			})
		}

		posts_title() {
			return 'Посты'
		}

		@$mol_mem
		post_rows() {
			return [] as $mol_view[]
		}
	}
}
