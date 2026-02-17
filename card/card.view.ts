namespace $.$$ {
	export class $club_card extends $.$club_card {
		post_data() {
			return this.post() as $club_api_post | null
		}

		post_uri() {
			const p = this.post_data()
			if (!p) return ''
			return `${p._club.type}/${p._club.slug}`
		}

		post_title() {
			const p = this.post_data()
			if (!p) return ''
			const prefix = this.title_prefix()
			const lock = p._club.is_public ? '' : '\uD83D\uDD12 '
			return lock + prefix + p.title
		}

		title_prefix() {
			const type = this.post_data()?._club?.type
			const map: Record<string, string> = {
				question: 'Вопрос: ',
				project: 'Проект: ',
				idea: '\uD83D\uDCA1 Идея: ',
				link: '\u2192 ',
				battle: 'Батл: ',
				thread: 'Тред: ',
			}
			return map[type ?? ''] ?? ''
		}

		upvotes() {
			const p = this.post_data()
			return p ? `${p._club.upvotes}` : ''
		}

		author_avatar() {
			return this.post_data()?.authors?.[0]?.avatar ?? ''
		}

		author_name() {
			return this.post_data()?.authors?.[0]?.name ?? ''
		}

		excerpt() {
			const text = this.post_data()?.content_text ?? ''
			if (!text) return ''
			// Strip markdown images and links, take first 200 chars
			const clean = text
				.replace(/!\[.*?\]\(.*?\)/g, '')
				.replace(/\[([^\]]*)\]\(.*?\)/g, '$1')
				.replace(/^#+\s+/gm, '')
				.replace(/\r?\n/g, ' ')
				.replace(/\s+/g, ' ')
				.trim()
			if (clean.length <= 200) return clean
			return clean.substring(0, 200).replace(/\s\S*$/, '') + '…'
		}

		date_label() {
			const d = this.post_data()?.date_published
			if (!d) return ''
			const m = new $mol_time_moment(d)
			return m.toString('DD.MM.YYYY')
		}

		comments_label() {
			const c = this.post_data()?._club?.comment_count ?? 0
			if (!c) return ''
			const word = c === 1 ? 'комментарий' : c < 5 ? 'комментария' : 'комментариев'
			return `${c} ${word}`
		}

		room_name() {
			return this.post_data()?._club?.room?.title ?? ''
		}

		type_label() {
			const type = this.post_data()?._club?.type
			const map: Record<string, string> = {
				post: 'Пост',
				question: 'Вопрос',
				project: 'Проект',
				event: 'Событие',
				thread: 'Тред',
				link: 'Ссылка',
				guide: 'Путеводитель',
				intro: 'Интро',
			}
			return type ? (map[type] ?? type) : ''
		}
	}
}
