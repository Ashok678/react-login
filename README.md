# Getting Started with Create React App

In the project directory, you can run:

# login page
In this there  is use usestate to validate form


### Declare React States for email and password
```
const [email, setemail] = useState("");
const [password, setpassword] = useState("");
```
### function to handle form submit
```
const submitForm = (e) => {
        e.preventDefault();

        const newEntry ={email, password};

        setAllEntry ([AllEntry, newEntry]);
        console.log( AllEntry);
```
### javascript code for login page 
```
<div className="container">
     <form action="">
        <div>
            <label htmlFor="email">Email</label><br />
            <input type="text" value={email} id = "email" onChange={(e) => setemail (e.target.value)} />
        </div>
        <div>
            <label htmlFor="password">Password</label><br />
            <input type="text" value={password} id = "password" onChange={(e) => setpassword (e.target.value)} />
        </div>
        <button onClick={submitForm}>Submit</button>
        <button id="btn1" >clear</button>
      </form>
     </div>
    ```
### submitted data are stored in this
    ```
     <div>
        {
            AllEntry.map((curElem) => {
                return(
                    <div className='showDataStyle'>
                        <p>{curElem.email}</p>
                        <p>{curElem.password}</p>

                    </div>

                )
            })
        }
      </div>
```
## CSS file  written in
**login.css**






### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


    
    
