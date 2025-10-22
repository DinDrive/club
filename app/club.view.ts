namespace $.$$ {
	export class $club extends $.$club {
		@$mol_mem
		settingsOpened(next: boolean = false) {
			return next
		}

		@$mol_mem
		post_arg() {
			return $mol_state_arg.value('post')
		}

		@$milis_log
		@$mol_mem
		token() {
			return $mol_state_local.value('token')
		}

		@$mol_mem
		FSettings() {
			if (!this.settingsOpened()) return new $mol_view()
			return new this.$.$club_settings()
		}

		@$mol_mem
		FPost() {
			if (!this.post_arg()) return new $mol_view()
			return new this.$.$club_post()
		}

		@$mol_mem
		FComments() {
			if (!this.token() || !this.post_arg()) return new $mol_view()
			return new this.$.$club_comments()
		}
	}
}

namespace $ {
	export class $club_filters extends $mol_view {
		@$mol_mem
		publicity() {
			return {
				public: '🔓 Публичные',
				private: '🔒 Приватные',
			}
		}

		@$mol_mem
		types() {
			return {
				post: '📝 Посты',
				project: '👷 Проекты',
				guide: '🌎 Путеводители',
				question: '🤔 Вопросы',
				thread: '📃 Треды',
				idea: '🤩 Идеи',
				event: '🥳 Ивенты',
				battle: '👊 Батлы',
				// "weekly_digest": "📰 Журнал Клуба",
				docs: '🔍 Доки',
			}
		}

		@$mol_mem
		timings() {
			return {
				new: 'Новое',
				activity: 'Обсуждаемое',
				hot: 'Горячее',
				top: 'Лучшее',
				top_week: 'Лучшее за неделю',
				top_month: 'Лучшее за месяц',
				top_year: 'Лучшее за год',
			}
		}
	}
}
