namespace $.$$ {
	const rgba = (r: number, g: number, b: number, a: number) => `rgba(${r},${g},${b},${a})` as any

	$mol_style_define($club_card, {
		display: 'grid',
		gridTemplateColumns: 'min-content minmax(auto, 1fr) min-content',
		gridTemplateRows: 'auto auto',
		position: 'relative',
		padding: {
			top: '30px',
			right: '30px',
			bottom: '30px',
			left: '40px',
		},
		margin: {
			left: '30px',
			bottom: '30px',
		},
		minHeight: '130px',
		cursor: 'pointer',
		background: {
			color: $mol_theme.card,
		},
		boxShadow: `10px 15px 40px ${rgba(83, 91, 110, 0.11)}`,
		border: {
			radius: '15px',
		},
		textDecoration: 'none',
		color: $mol_theme.text,
		transition: '0.1s ease-out',

		':hover': {
			boxShadow: `0 0 40px ${rgba(94, 104, 125, 0.3)}`,
		},

		Author_col: {
			gridColumn: '1',
			gridRow: '1 / 3',
			justifySelf: 'start',
			display: 'flex',
			alignItems: 'center',
		},

		Avatar: {
			position: 'absolute',
			left: '-26px',
			width: '52px',
			height: '52px',
			border: {
				radius: '50%',
				width: '3px',
				style: 'solid',
				color: $mol_theme.card,
			},
			objectFit: 'cover',
			zIndex: 2,
		},

		Header: {
			gridColumn: '2',
			gridRow: '1',
			justifySelf: 'start',
			alignSelf: 'end',
			padding: {
				bottom: '10px',
			},
			maxWidth: '100%',
			overflow: 'hidden',
			textOverflow: 'ellipsis',
		},

		Post_title: {
			font: {
				size: '140%',
				weight: 500,
			},
			lineHeight: '1.3em',
			textAlign: 'left',
		},

		Footer: {
			gridColumn: '2',
			gridRow: '2',
			justifySelf: 'start',
			alignSelf: 'start',
			display: 'flex',
			flex: {
				direction: 'row',
				wrap: 'wrap',
			},
			gap: '0.5rem',
			font: {
				size: '0.9rem',
			},
			color: $mol_theme.shade,
		},

		Type_label: {
			opacity: 0.6,
		},

		Comments_count: {
			color: '#999',
			whiteSpace: 'nowrap',
		},

		Votes: {
			gridColumn: '3',
			gridRow: '1 / 3',
			justifySelf: 'end',
			display: 'flex',
			alignItems: 'center',
			padding: {
				left: '10px',
			},
		},
	})
}
