// import React, { createContext, useState, useContext, useEffect } from 'react';
// import { useColorScheme } from 'react-native';
// // import AsyncStorage from '@react-native-async-storage/async-storage'; // For persistence

// const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   const systemColorScheme = useColorScheme(); // 'light' or 'dark' or null
//   const [theme, setTheme] = useState(systemColorScheme || 'light'); // Default to light if system not available

//   useEffect(() => {
//     // Load saved theme preference from AsyncStorage
//     const loadTheme = async () => {
//       try {
//         const savedTheme = await AsyncStorage.getItem('userTheme');
//         if (savedTheme) {
//           setTheme(savedTheme);
//         } else if (systemColorScheme) {
//           setTheme(systemColorScheme);
//         }
//       } catch (error) {
//         console.error('Failed to load theme from storage', error);
//       }
//     };
//     loadTheme();
//   }, [systemColorScheme]);

//   const toggleTheme = async () => {
//     const newTheme = theme === 'light' ? 'dark' : 'light';
//     setTheme(newTheme);
//     try {
//       await AsyncStorage.setItem('userTheme', newTheme); // Save preference
//     } catch (error) {
//       console.error('Failed to save theme to storage', error);
//     }
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };