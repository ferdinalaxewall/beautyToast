# beautyToast - Beautiful Toast Notification

> *Customizable, Fast, Lightweight, Responsive*

beautyToast is a **Javascript Notification Plugin** that can be **customized** according to your needs.

## Getting Started

 1. **Install beautyToast**, to use **beautyToast** you can download the package [here](https://github.com/ferdinalaxewall/beautyToast/archive/refs/tags/v1.0.0b.zip), or use a CDN.
 2. If you don't use a CDN, first extract the **.zip** package file that was downloaded.

### Setup in your project

 1. Include the **beautyToast CSS** at the top of your page in your `<head>` tag:
    ```xml
    <link href="path/to/beautyToast.min.css" rel="stylesheet" />
    ```
    or if you're use a **CDN**:
    ```xml 
    <link href="https://rawcdn.githack.com/ferdinalaxewall/beautyToast/v1.0.0b/beautyToast.min.css" rel="stylesheet" />
    ```
    
 2. Include the **beautyToast Javascript** at the bottom of your page before the closing `</body>` tag:
    ```xml
    <script src="path/to/beautyToast.min.js"></script>
    ```
    or if you're use a **CDN**:
    ```xml 
    <script src="https://rawcdn.githack.com/ferdinalaxewall/beautyToast/v1.0.0b/beautyToast.min.js"></script>
    ```
    

## Basic Usage

Currently there are 4 types of notification that you can use:

- ### Success Notification

	```javascript
	<script>
		beautyToast.success({
			title: 'Success', // Set the title of beautyToast
			message: 'Success Message' // Set the message of beautyToast
		});
	</script>
	```

- ### Error Notification

	```javascript
	<script>
		beautyToast.error({
			title: 'Error', // Set the title of beautyToast
			message: 'Error Message' // Set the message of beautyToast
		});
	</script>
	```

-	### Info Notification

	```javascript
	<script>
		beautyToast.info({
			title: 'Info', // Set the title of beautyToast
			message: 'Info Message' // Set the message of beautyToast
		});
	</script>
	```

- ### Warning Notification

	```javascript
	<script>
		beautyToast.warning({
			title: 'Warning', // Set the title of beautyToast
			message: 'Warning Message' // Set the message of beautyToast
		});
	</script>
	```


## Options

### Default Options:
```javascript
beautyToast.success({title : 'Error',
	id : null,
	title : '', 
	message : '',
	icon : '',
	backgroundColor : '',
	messageColor : '',
	titleColor : '',
	progressBarColor : '',
	topbarColor : '',
	iconColor : '',
	darkTheme : false,
	iconWidth : 31,
	iconHeight : 31,
	closeButton : true,
	timeout : 2500,
	animationTime : 150,
	onClose : function(){},
	onOpen : function(){},
});
```
| Argument | Default Value | Data Type | Description 
|--|--|--|--|
| id | null | string | The ID that will be applied to the toast element. It may be used as a reference.
| title | '' | string | Title of notification.
| icon | '' | string | Icon class (font-icon like [FontAwesome](https://fontawesome.com/), [Boxicons](https://boxicons.com/), etc.).
| backgroundColor | '' | string | Background color of the toast (It can be #hexadecimal, rgb(), rgba(), and pre-defined themes like **blue**, **red**, **green** and **yellow**).
| messageColor | '' | string | Text color of the toast message (It can be #hexadecimal, rgb(), rgba(), and pre-defined themes like **blue**, **red**, **green** and **yellow**).
| titleColor | '' | string | Text color of the toast title (It can be #hexadecimal, rgb(), rgba(), and pre-defined themes like **blue**, **red**, **green** and **yellow**).
| progressBarColor | '' | string | Progress bar color of the toast progress bar (It can be #hexadecimal, rgb(), rgba(), and pre-defined themes like **blue**, **red**, **green** and **yellow**).
| topbarColor | '' | string | Top BarColor of the toast (It can be #hexadecimal, rgb(), rgba(), and pre-defined themes like **blue**, **red**, **green** and **yellow**).
| iconColor | '' | string | Icon color of the toast (It can be #hexadecimal, and pre-defined themes like **blue**, **red**, **green** and **yellow**).
| darkTheme | false | boolean | Theme of the toast (false = ** Light Mode** and true = **Dark Mode**).
| iconWidth | 31 | number | Width of the toast icon (the number will be convert to 'px').
| iconHeight | 31 | number | Height of the toast icon (the number will be convert to 'px').
| iconSize | 31 | number | Size of the custom toast icon (both of height and width, and the number will be convert to 'px').
| closeButton | true | boolean | **true** = Show "x" button, and **false** = Hide "x" button. 
| timeout | 2500 | number | Amount in milliseconds to close the toast.
| animationTime | 150 | number | Amount in milliseconds to animate element inside the toast, when opening the toast.
| onClose | function(){} | Callback Function | Callback function triggered when closed the toast.
| onOpen | function(){} | Callback Function | Callback function triggered when opening the toast.


## Settings

Settings Method is used to set default values of the toast, you can customize the default value of the toast according to your needs:

> **Tip:** set the configuration based on your needs only

```javascript
beautyToast.settings({
	darkTheme: false,
	iconWidth: 31,
	iconHeight: 31,
	iconSize: 31,
	closeButton: true,
	timeout: 2500,
	animationTime: 150,
})
```

## Issues & Feature Request

If you find a bug in this package or want to request additional features, you can write [here](https://github.com/ferdinalaxewall/beautyToast/issues).

### *-- Hope this package can help your project to be more beautiful! :) --*
