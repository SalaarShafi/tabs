Check it out here: https://tabs-salaarshafi.netlify.app/

This project fetches data and displays it as named buttons which when clicked provide you with information of a candidates skills, experience, job title and details.

A function is defined which uses async and await functionalities to fetch data from an api and convert it into json and sets a predefined jobs state set by useState equal to the recieved data. This data is an array so when another numeric state named value is set by using useState it can be used to access elements from the previously mentioned data array and changing it can change the element being obtained from the data array which stores in a const.

The data is mapped and returns an array of buttons which take names from each name property mentioned in each element of the data array. The buttons on clicking each set the value state equal to the index of the corresponding data element in the data array. This value state is then used to obtain the object data element corresponding to the clicked button from the array and display it as a jsx component. A ternary operator is also used to highlight the currently active button. This is done by comparing the buttons data elements index in the data array to the value state.
