# Stateful
```dart 
import 'package:flutter/material.dart';

void main() {
  runApp(const Anime()); // Run the Anime widget as the root of the app
}

class Anime extends StatefulWidget {
  const Anime({super.key});

  @override
  State<Anime> createState() => _AnimeState(); // Create the state for the Anime widget
}

class _AnimeState extends State<Anime> {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      // MaterialApp to create the app
      debugShowCheckedModeBanner: false, // Remove the debug banner
      title: 'Anime',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(
          seedColor:
              Colors.deepOrange, // Set the seed color for the color scheme
              brightness: Brightness.dark, // Set the brightness to dark
        ),
      ),
      home: SafeArea( //SafeArea to avoid intrusions from system UI
        child: Scaffold(  // Scaffold for skeleton
          
        ),
      ), 
    ); 
  }
}
```

# appBar
```dart
appBar: AppBar(
            title: Text('Home'), // Set the title of the app bar
            centerTitle: true, // Center the title
            backgroundColor: Colors.deepOrange, // Set the background color of the app bar
          ),
```

# drawer

```dart
drawer: Drawer(
            // Drawer to create a side menu
            child: Column(
              children: [
                ListTile(
                  title: Text('One Piece'), // Set the title of the list tile
                  leading: Icon(Icons.add_call), // Set the leading icon of the list tile
                ),
              ],
            ),
          ),
```
> all icons: https://api.flutter.dev/flutter/material/Icons-class.html

```dart
drawer: Drawer(
            // Drawer to create a side menu
            child: Column(
              children: [
                ListTile(
                  title: Text('One Piece'), // Set the title of the list tile
                  leading: Image.asset( // Set the leading icon of the list tile
                    'assets/icons/one_piece_flag.png', // Path to the image asset
                    width: 24, // Set the width of the image
                    height: 24, // Set the height of the image
                  ),
                ),
              ],
            ),
          ),
```

# bottomNavigationBar

```dart

class _AnimeState extends State<Anime> {
  int currentIndex =
      0; //currentIndex to set the current index of the navigation bar
  @override //before override, so does not refresh currentIndex when click the navigation bar
}
-------------------------------------------------------------------------
bottomNavigationBar: NavigationBar(
        //botoomNavigationBar to create the bottom navigation bar of the app
        destinations: [
          NavigationDestination(
            icon: Image.asset(
              //Image.asset to load the image as an icon for the navigation destination
              'assets/icons/one_piece_flag.png',
              width: 24,
              height: 24,
            ),
            label: 'One Piece',
          ),
          NavigationDestination(
            icon: Image.asset(
              'assets/icons/icon_one_punch.png',
              width: 24,
              height: 24,
            ),
            label: 'One Punch Man',
          ),
        ],
        onDestinationSelected: (int value) {
          setState(() {
            currentIndex =
                value; //onDestinationSelected to set the current index of the navigation bar when a destination is selected
          }); //setState to refresh the page when a destination is selected
        },
        selectedIndex:
            currentIndex, //selectedIndex to set the selected index of the navigation bar
      ),
```

```dart
class _AnimeState extends State<Anime> {
  int selectedIndex = 0; 
  @override 
}
-------------------------------------------------------------
bottomNavigationBar: NavigationBar(
            destinations: [
              NavigationDestination(
                icon: Icon(Icons.home), // Set the icon for the home destination
                label: 'Home', // Set the label for the home destination
              ),
              NavigationDestination(
                icon: Icon(Icons.favorite), // Set the icon for the favorites destination
                label:
                    'Favorites', // Set the label for the favorites destination
              ),
              NavigationDestination(
                icon: Icon(Icons.settings), // Set the icon for the settings destination
                label: 'Settings', // Set the label for the settings destination
              ),
            ],
            onDestinationSelected: (int value) {
              setState(() {
                selectedIndex = value;
              });
            },
            selectedIndex:
                selectedIndex, // Set the selected index for the navigation bar,
          ),
```