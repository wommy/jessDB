const google = require('googleapis')

( async ()=>{
	// Auth
	const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'] })

	const sheets = google.sheets({ version: 'v4' })

	const { id } = query
	const range = `jessDB!A${id}:H${id}`

	const response = await sheets.spreadsheets.values.get({
		spreadsheetID: process.env.SHEET_ID,
		range,
	})

	const [title, content] = response.data.values[0]

	return { props: { title, content } }

} )()

