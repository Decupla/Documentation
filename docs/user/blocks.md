# Blocks

In Decupla, each content is assembled from the instances of different blocks. For example, you can add text-block to your content and a author-block which provides some information about the author. 

Since you know best which types of blocks are useful for your content, Decupla allows you to create as many different blocks as you need. To make these blocks reusable, you can add flexible input fields.

Let's take the author block as an example: you could add an input field for the name of the author, another one for a short biography, and a media selection for a picture of the author. This way, you can set a different name, biography and image for each instance of this block.

## Input Fields

When creating the Block, you can add as many input fields as you want. While adding these input fields, you can choose between these types:

| Type       | Description                            | Additional Options                         |
|------------|----------------------------------------|-------------------------------------------|
| Short Text        | A single-line text input. Can be used for headlines, names, etc. | |
| Long Text         | A WYSIWYG text editor. Suitable for long and formatted text. | |
| Media              | Select media from the media library. | **Selection**: Allow single or multiple media to be selected. |

*More types of input fields are currently in developement*

## Key

In addition to the title of the content, there is a field called 'key'. This key will help the developer of your application to map the instances of the blocks in the content to this block. Since the key is used to uniquely identify the block, it must be **unique**. To make life easier for your developer, the key can also contain **no spaces**.