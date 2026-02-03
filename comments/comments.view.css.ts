namespace $.$$ {
	$mol_style_define( $club_comments, {
		width: '840px',

		AuthorAvatar: {
			width: '50px',
			height: '50px',
			border: {
				radius: '50%',
			},
		},

		Comment: {
			display: 'flex',
			flex: {
				direction: 'column',
				wrap: 'wrap',
			},
			margin: $mol_gap.block,
			padding: $mol_gap.block,
			background: {
				color: $mol_theme.card,
			},
			border: {
				radius: $mol_gap.round,
			},
			boxShadow: '0 -0.5rem 0.5rem -0.5rem hsla(0,0%,0%,0.25), 0 0.5rem 0.5rem -0.5rem hsla(0,0%,0%,0.25)',
		},

		Author: {
			display: 'flex',
			flex: {
				direction: 'row',
				wrap: 'wrap',
			},
			align: {
				items: 'center',
			},
			gap: $mol_gap.block,
		},
	} )
}
