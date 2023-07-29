# Decor Impress (Website)

Website for Russian company Decor Impress, made on Express + React stack. Language coincides with the domain zone: **RU**

<p align='center'>
       <img height=150 src="client\src\images\logo.svg"/>
</p>

## Purpose

Website is designed to display a catalog of products along with their prices and also get feedback from customers.

## Technology stack

**General:**
* Node.js

  * **Package manager:**

      * Yarn

  * **Frontend:**

      * React

  * **Backend:**

      * Express

## Assembly

### Makefile

To build an application, you must call the following in sequence (from root of project):

  1) ```make install``` - Install all dependencies (General - Backend - Frontend)

  2) ```make build``` - Create an optimized frontend build

  3) ```yarn start``` - Start the server on a port from .env or 3000 by default

The following scripts may also be used *separately*:

* ```make reset``` - Remove all dependencies and temporary files (roll everything back to clean code)

* ```make pack/unpack``` - Pack/unpack the code into an archive for further transfer to the hosting via FTP

## Contributors

| Nickname | Email | Execution area | Valid
|:-|:-|:-|:-:|
| Ggorets0 | nikgorets4work@gmail.com | Backend (Express) development and customization for hosting | yes |
| xandrozzz | evg.alexandrov95@gmail.com | Frontend (React) development | yes |
| RobertDeveloperBlog | robert.askarov43@gmail.com | Initial development of the first few slides on pure HTML-CSS | no |

## License

<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License</a>.

Text of the license is provided in the LICENSE file. CC BY-NC-ND-4.0 license prohibits derivative works from the source code of this repository and commercial use. The exclusive right to commercial use is granted to the owner of [Decor Impress](https://decor-impress.ru), for whom the site was custom made. The code is open ONLY for adding to the portfolios of developer-contributors for the purpose of further familiarization by employers.
