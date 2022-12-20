<h1>Welcome to Image Processor API </h1>

---
<p>
    This project provides a simple and efficient way resize images. The project is built using javaScript and utilizes the sharp library for image manipulation.
</p>

<p>
    <h2>Installing Packages </h2>
    To use the image processor, you will need to have node and npm installed on your machine. You can then clone or download this repository and navigate to the directory in your command line.
    Then you  run: <code>npm install</code> to install the packages used in this project.
</p>
<p>
    <h2>Starting localhost Server </h2>
    To start the server run the command <code>npm run start</code>. In your terminal your server will start and you will see a link to access it. 
    <a href="http://localhost:3000">http://localhost:3000</a>.
</p>

<p>
    <h2>Resizing image</h2>
    After starting the server, To access the image resizer, and the endpoint <code>/api/images</code> <br>
    Copy the desired file and paste in the <code>src/assets/full</code> <br>
    Then in the url add the params (filename, width, height) with their values.
    <strong>example:</strong> <a href="http://localhost:3000/api/images?filename=saitama&width=300&height=400">http://localhost:3000/api/images?filename=saitama&width=300&height=400</a> <br>
    The file will be generate and stored in the <code>src/assets/thumb</code> directory.
</p>

<p>
    <h2>Testing with Jasmine</h2>
    To test the code run the command: <code>npm run test</code>. In your terminal the results of the test will be generated.
</p>

---

