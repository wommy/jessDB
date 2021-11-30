# jessDB by [@wommy](github.com/wommy)

## description

a friend of mine has to submit her homework in a table

the exported table's columns are wrong

since it takes her a few hours to correct it, i wrote a script to automate it

## given: [11-27.txt](https://github.com/wommy/jessDB/blob/dev/11-27.txt)

- [x] to `.csv`
- [x] remove old headers
- [x] fixup date

- [x] add new headers
- [x] transform data

	- original shape  
		```js
		{
			asset_name: "Pre-Lecture Quiz: Chapter 58",
			resource_type: "Pre-Lecture Quiz",
			topic: "Chapter 58: Drugs Affecting Gastrointestinal Motility",
			date_completed: "Nov 26, 2021",
			score: "100%"
		}
		```

	- new shape
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

### transform detailed, easy

- [x] `book` : `'Karch'`
- [x] `chapter` : `+data[i+2].slice(8,10)`
- [x] `assignment` : `data[i+1]`
- [x] `date` : `data[i+3]`
- [x] `grade` : `data[i+4]`
- [x] `total` += `points`

### transform detailed, harder

- [x] `week`: derived from `chapter`

  - [x] `weekChapter{}`  
	```js
	{
		9: [39,40,41],
		10: [42,43,44,45],
		11: [46,47,48,49],
		12: [50,51,52],
		13: [53,54,55],
		14: [56,57,58,59],
	}
	```

  - [x] `chapterWeek{}`
    - [x] `Object.keys(weekChapter)` 
		- [x] `weekChapter[week] = chapters[]`  
  use keys to get chapters
		- [x] `chapter` => `chapterWeek[chapter] = +week`  
  on each, append to new object

- [x] `points`: derived from `assignment`
	
	```js
	assignment.split(' ').shift() == 'PrepU' && '1'
	|| assignment == 'Pre-Lecture Quiz' && '0.5'
	|| '.25'
	```

  becomes  

	```js
	{
		"PrepU Mastery Level Quizzes by Chapter": 1.0,
		"Pre-Lecture Quiz": 0.5,
	}[assignment] || 0.25
	```
