namespace $.$$ {
	$mol_style_define($club_post, {
		width: '100%',
		maxWidth: '880px',
		margin: {
			left: 'auto',
			right: 'auto',
		},
		padding: {
			top: '2rem',
			right: '1.75rem',
			bottom: '3rem',
			left: '1.75rem',
		},
		color: '#1f2328',

		Head: {
			flex: {
				direction: 'column',
				wrap: 'nowrap',
			},
			gap: $mol_gap.block,
		},

		Title: {
			font: {
				family: 'Merriweather, Georgia, serif',
				size: '2.2rem',
				weight: 700,
			},
			lineHeight: '2.7rem',
		},

		Upvote: {
			align: {
				self: 'flex-start',
			},
			font: {
				weight: 700,
			},
			padding: {
				top: '.35rem',
				right: '.75rem',
				bottom: '.35rem',
				left: '.75rem',
			},
			border: {
				radius: '999px',
			},
		},

		Article: {
			background: {
				color: $mol_theme.card,
			},
			border: {
				radius: '16px',
			},
			padding: {
				top: '1.5rem',
				right: '1.75rem',
				bottom: '1.5rem',
				left: '1.75rem',
			},
			boxShadow: '0 12px 40px rgba(0,0,0,0.08)',
			font: {
				family: 'Merriweather, Georgia, serif',
				size: '1.05rem',
			},
			lineHeight: '1.9rem',
		},

		Info: {
			display: 'flex',
			flex: {
				direction: 'row',
				wrap: 'wrap',
			},
			gap: $mol_gap.block,
			padding: {
				top: '.25rem',
				right: 0,
				bottom: 0,
				left: 0,
			},
			font: {
				family: 'Ubuntu, Helvetica, Verdana, sans-serif',
				size: '.95rem',
			},
			color: '#5b636b',
		},

		Authors: {
			flex: {
				direction: 'row',
				wrap: 'wrap',
			},
			gap: $mol_gap.block,
			padding: {
				top: '.25rem',
				right: 0,
				bottom: 0,
				left: 0,
			},
		},

		Author: {
			display: 'flex',
			flex: {
				direction: 'row',
				wrap: 'nowrap',
			},
			align: {
				items: 'center',
			},
			gap: $mol_gap.block,
			padding: {
				top: '.5rem',
				right: '.75rem',
				bottom: '.5rem',
				left: '.75rem',
			},
			background: {
				color: $mol_theme.back,
			},
			border: {
				radius: '999px',
			},
		},

		AuthorAvatar: {
			width: '100px',
			height: '100px',
			border: {
				radius: '50%',
			},
		},

		AuthorName: {
			font: {
				family: 'Ubuntu, Helvetica, Verdana, sans-serif',
				weight: 600,
			},
		},
	})
}
