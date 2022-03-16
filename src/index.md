---
layout: base
---
{# for i in range(0,5) %}
{{ jess.rowsPost.content[i] | log }}
{% endfor #}

<details>
	<summary>rows pre</summary>

|{% for ea in jess.rowsPre.headers %} {{ ea }} |{% endfor %}  
|{% for ea in jess.rowsPre.headers %} ----- |{% endfor %}{% for data in jess.rowsPre.content %}
|{% for ea in jess.rowsPre.headers %} {{ data[ea] }} |{% endfor %}{% endfor %}
</details>

<details open>
	<summary>rows post</summary>

|{% for ea in jess.rowsPost.headers %} {{ ea }} |{% endfor %}  
|{% for ea in jess.rowsPost.headers %} ----- |{% endfor %}{% for data in jess.rowsPost.content %}
|{% for ea in jess.rowsPost.headers %} {{ data[ea] }} |{% endfor %}{% endfor %}
</details>
