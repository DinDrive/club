namespace $.$$ {
	$mol_style_define($club_main, {
		maxWidth: '640px',

		Head: {
			flex: {
				wrap: 'wrap',
			},
			gap: '0.5rem',
			align: {
				items: 'center',
			},
		},

		Logo: {
			display: 'flex',
			flex: {
				direction: 'row',
			},
			align: {
				items: 'center',
			},
			gap: '0.5rem',
		},

		Logo_img: {
			width: '2rem',
			height: '2rem',
		},

		Logo_text: {
			font: {
				size: '1.4rem',
				weight: 'bold',
			},
			margin: {
				right: 'auto',
			},
		},

		Ordering: {
			border: {
				radius: '6px',
			},
			background: {
				color: $mol_theme.back,
			},
		},

		Body_content: {
			gap: '0.5rem',
		},
	})
}
