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

		comments_count_label() {
			const c = this.data()?.user?.comments_count
			return c != null ? String(c) : ''
		}

		comments_text() {
			const c = this.data()?.user?.comments_count ?? 0
			const mod = c % 10
			const mod100 = c % 100
			if (mod100 >= 11 && mod100 <= 19) return 'комментариев'
			if (mod === 1) return 'комментарий'
			if (mod >= 2 && mod <= 4) return 'комментария'
			return 'комментариев'
		}

		posts_count_label() {
			const p = this.data()?.user?.posts_count
			return p != null ? String(p) : ''
		}

		posts_text() {
			const p = this.data()?.user?.posts_count ?? 0
			const mod = p % 10
			const mod100 = p % 100
			if (mod100 >= 11 && mod100 <= 19) return 'постов'
			if (mod === 1) return 'пост'
			if (mod >= 2 && mod <= 4) return 'поста'
			return 'постов'
		}

		body() {
			const parts: $mol_view[] = [this.Card(), this.Statuses()]
			if (this.intro_text()) {
				parts.push(this.Intro_section())
			}
			if (this.tag_rows().length) {
				parts.push(this.Tags_section())
			}
			return parts
		}

		@$mol_mem
		tags_flat() {
			const tags_by_group = this.tags_data()?.tags
			if (!tags_by_group) return [] as $club_api_tag[]
			const all_tags: $club_api_tag[] = []
			for (const group of Object.values(tags_by_group)) {
				all_tags.push(...group)
			}
			return all_tags
		}

		tag_key(tag: $club_api_tag) {
			return `${tag.code}:${tag.name}`
		}

		@$mol_mem
		tags_index() {
			const index = new Map<string, $club_api_tag>()
			for (const tag of this.tags_flat()) {
				index.set(this.tag_key(tag), tag)
			}
			return index
		}

		@$mol_mem_key
		tag_row(key: string) {
			const v = new this.$.$club_tag()
			v.tag = () => this.tags_index().get(key) ?? null as any
			return v
		}

		@$mol_mem
		tag_rows() {
			return Array.from(this.tags_index().keys()).map(key => this.tag_row(key))
		}
	}
}
