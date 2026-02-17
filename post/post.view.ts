namespace $.$$ {
	export class $club_post extends $.$club_post {
		@$mol_mem
		data() {
			const type = this.post_type()
			const slug = this.post_slug()
			if (!type || !slug) return null
			return $club_api.post(`${type}/${slug}`)
		}

		@$mol_mem
		comments_data() {
			const type = this.post_type()
			const slug = this.post_slug()
			if (!type || !slug) return null
			return $club_api.post_comments(`${type}/${slug}`)
		}

		is_battle() {
			return this.post_type() === 'battle'
		}

		post_title() {
			return this.data()?.post?.title ?? ''
		}

		article_header_content() {
			if (this.is_battle()) {
				return [
					this.Room_badge(),
					this.Battle_title(),
					this.Post_publicity(),
					this.Post_info(),
					this.Post_author(),
					this.Battle_stats(),
				]
			}
			return [
				this.Room_badge(),
				this.Post_title_block(),
				this.Post_publicity(),
				this.Post_info(),
				this.Post_author(),
			]
		}

		battle_side_a() {
			const title = this.post_title()
			const parts = title.split(/\s+или\s+/)
			return parts[0] ?? ''
		}

		battle_side_b() {
			const title = this.post_title()
			const parts = title.split(/\s+или\s+/)
			return parts[1] ?? ''
		}

		@$mol_mem
		battle_comments_by_side() {
			const comments = this.comments_data()?.comments ?? []
			let side_a = 0
			let side_b = 0
			for (const c of comments) {
				const side = (c as any).battle_side
				if (side === 'a') side_a++
				else if (side === 'b') side_b++
			}
			return { a: side_a, b: side_b }
		}

		battle_args_a_label() {
			const sides = this.battle_comments_by_side()
			return `${this.battle_side_a()}: ${sides.a}`
		}

		battle_args_b_label() {
			const sides = this.battle_comments_by_side()
			return `${this.battle_side_b()}: ${sides.b}`
		}

		publicity_label() {
			const p = this.data()?.post?._club?.is_public
			if (p === false) return '🔒 Только для членов клуба'
			return '🌍 Публичный пост'
		}

		room_label() {
			return this.data()?.post?._club?.room?.title ?? ''
		}

		upvotes_label() {
			const u = this.data()?.post?._club?.upvotes
			return u != null ? `▲ ${u}` : ''
		}

		author_avatar() {
			return this.data()?.post?.authors?.[0]?.avatar ?? ''
		}

		author_name() {
			return this.data()?.post?.authors?.[0]?.name ?? ''
		}

		author_position() {
			const author = this.data()?.post?.authors?.[0]
			if (!author) return ''
			return (author as any).position ?? ''
		}

		author_slug() {
			const url = this.data()?.post?.authors?.[0]?.url ?? ''
			const match = url.match(/\/user\/([^/]+)/)
			return match ? match[1] : ''
		}

		published_date() {
			const d = this.data()?.post?.date_published
			if (!d) return ''
			return new $mol_time_moment(d).toString('DD.MM.YYYY hh:mm')
		}

		views_label() {
			const v = (this.data()?.post as any)?._club?.view_count
			return v ? `👁 ${v}` : ''
		}

		content_text() {
			return this.data()?.post?.content_text ?? ''
		}

		comments_count_label() {
			const count = this.data()?.post?._club?.comment_count ?? 0
			return count ? `${count} комментариев 👇` : 'Комментарии'
		}

		comment_key(comment: $club_api_comment) {
			return comment.id
		}

		@$mol_mem
		comments_index() {
			const index = new Map<string, $club_api_comment>()
			for (const comment of this.comments_data()?.comments ?? []) {
				index.set(this.comment_key(comment), comment)
			}
			return index
		}

		@$mol_mem_key
		comment_row(key: string) {
			const row = new this.$.$club_comment()
			row.comment = () => this.comments_index().get(key) ?? null as any
			return row
		}

		@$mol_mem
		comment_rows() {
			return Array.from(this.comments_index().keys()).map(key => this.comment_row(key))
		}
	}
}
