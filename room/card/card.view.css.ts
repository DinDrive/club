namespace $.$$ {
	$mol_style_define($club_room_card, {
		display: 'flex',
		flex: {
			direction: 'row',
		},
		align: {
			items: 'center',
		},
		gap: '5px',
		padding: {
			top: '10px',
			right: '20px',
			bottom: '10px',
			left: '10px',
		},
		margin: {
			top: '10px',
		},
		border: {
			radius: '30px',
		},
		color: '#FFF',
		textDecoration: 'none',
		font: {
			weight: 500,
			size: '100%',
		},
		overflow: 'hidden',
		transition: '0.2s',

		Icon: {
			width: '35px',
			height: '35px',
			border: {
				radius: '50%',
			},
			objectFit: 'cover',
			flex: {
				shrink: 0,
			},
		},

		Title: {
			overflow: 'hidden',
			textOverflow: 'ellipsis',
			whiteSpace: 'nowrap',
			color: '#FFF',
		},
	})
}
