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

		post_title() {
			return this.data()?.post?.title ?? ''
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

		@$mol_mem
		comment_rows() {
			const comments = this.comments_data()?.comments ?? []
			return comments.map(comment => {
				const row = new this.$.$club_comment()
				row.comment = () => comment
				return row
			})
		}
	}
}
