## Assignment 2
Write a custom hook that does:

* Given a country name (international or native), returns a country object from [countries APIs](https://restcountries.com/). You may use caching for better performance.
* The example usage of the hook is like this:
```
const [error, country] = useCountry('Suomi')
```
* Convert that hook into a HoC