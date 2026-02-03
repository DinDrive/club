namespace $.$$ {
	const Title_style = {
		font: {
			size: '1.8rem',
			weight: 'bolder',
		},
		lineHeight: '2.5rem',
		padding: {
			top: '.2rem',
			right: '.6rem',
			bottom: '.2rem',
			left: '.6rem',
		},
	} as const

	$mol_style_define($club_main, {
		width: '500px',

		Head: {
			justify: {
				content: 'start',
			},
			align: {
				items: 'center',
			},
			'>': {
				$mol_switch: {
					borderTop: `1px solid ${$mol_theme.line}`,
					background: {
						color: $mol_theme.card,
					},
					border: {
						radius: '4px',
					},
				},
			},
		},

		Logo: {
			width: '25px',
			height: '25px',
		},

		Post: {
			justify: {
				content: 'space-between',
			},
		},

		Upvote: {
			minWidth: '60px',
			justify: {
				content: 'center',
			},
		},

		Title1: {
			...Title_style,
		},

		Title2: {
			...Title_style,
			marginRight: 'auto',
		},

		PostTitle: {
			maxWidth: '380px',
		},

		Body_content: {
			height: '100%',
		},
	})
}
