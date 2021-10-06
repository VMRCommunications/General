# vmr-gpt-assets

VMR GPT Client Assets Builder and Deployment Workflow

## Example usage

Add inside `<head>` tag after the Google gpt.js library script
```
<script async src="https://{ domain }.com/crux/dist/js/vmr-crux-gpt.min.js"></script>
```

Ad slots should be defined inside the HTML body like this (note there is no inline script tag!)
```
<!-- GPT AdSlot 1 for Ad unit 'CruxNow.com_New_300x250' ### Size: [[300,250]] -->
<div id='div-gpt-ad-3284456-1'></div>
<!-- End AdSlot 1 -->
```

## Local development

### 1. Clone this repository

```
git clone https://github.com/danurbanowicz/vmr-gpt-assets.git vmr-gpt-assets
```

### 2. Navigate to the directory

```
cd /my/path/to/vmr-gpt-assets
```

### 3. Install dependencies locally

```
npm install
```

### 4. Add .env file and environment variable for development
```
echo 'ELEVENTY_ENV=development' > .env
```

### 5. Build files

```
npx @11ty/eleventy
```

Or serve during development

```
npx @11ty/eleventy --serve
```

