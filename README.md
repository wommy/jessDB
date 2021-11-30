# jessDB by [@wommy](github.com/wommy)

## project description

jess has a copy/pasted file from some homework app

she has to convert it into a table to turn it in

## given

`11-27.txt`

each assignment takes 5 rows

i should probably just put this into csv first

- [x] removed old headers
- [x] fixed up the date

## whats next

- [ ] re-add headers
- [ ] transform data

### original headers

```js
{
	asset_name: "Pre-Lecture Quiz: Chapter 58",
	resource_type: "Pre-Lecture Quiz",
	topic: "Chapter 58: Drugs Affecting Gastrointestinal Motility",
	date_completed: "Nov 26, 2021",
	score: "100%"
}
```

### end headers

```js
{
	week: 14,
	book: "Karch",
	chapter: 58,
	assignment: "Pre-Lecture Quiz",
	date: "Nov 26, 2021",
	grade: "100%",
	points: 0.5,
	total: 0.5,
}
```

### how do i transform these

- [x] week: derived from `chapter`
  - ```js
	{
		9: [39,40,41],
		10: [42,43,44,45],
		11: [46,47,48,49],
		12: [50,51,52],
		13: [53,54,55],
		14: [56,57,58,59],
	}
	```
- [x] book: `'Karch'`
- [x] chapter: `[i+2].slice(8,10)`
- [x] assignment: `[i+1]`
- [x] date: `[i+3]`
- [x] grade: `[i+4]`
- [ ] points: derived from `assignment`
	- [x] |  
		```js
		assignment.split(' ').shift() == 'PrepU' && '1'
		|| assignment == 'Pre-Lecture Quiz' && '0.5'
		|| '.25'
		```
  - [x] becomes  
	```js
	{
		"PrepU Mastery Level Quizzes by Chapter": 1.0,
		"Pre-Lecture Quiz": 0.5,
	}[assignment] || 0.25
	```
- [ ] total is += points

### harder ones

- [x] week
  - [x] weekChapter => chapterWeek
  - [ ] 
