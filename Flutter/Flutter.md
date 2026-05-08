1. [Folder Structure](#folder-structure)
2. [Changing App Icon](#changing-app-icon)

# Websites

- [codemagic](https://codemagic.io/start/)

---


# Starting

> `flutter create app_name`, app_name has to be small and no space

> Widgets are capital, Arguements are small

---


# Flutter running online

> `flulab.io`, make a simple project, understand it, covnert to dart, use AI, get the apk

# Making a flutter project, desktop

---

# Changing App Icon

> make `assests` folder in root folder where pubspec.yaml is. Inside assets make `icon` folder, and add your something.png.

> Come to `pubspec.yaml`,
>
> ```dart
> dev_dependencies:
>  flutter_test:
>    sdk: flutter        # Flutter's built-in testing framework
>  flutter_launcher_icons: ^0.13.1 # add this line
> ```
>
> & and this code
>
> ```jsx
> flutter_launcher_icons: android: "launcher_icon";
> ios: true;
> image_path: "assets/icon/something.png";
> ```

> run the commands in root terminal, `flutter pub get` & `flutter pub run flutter_launcher_icons`

---

# Running Flutter

> `flutter analyze`, analyze before running
> `flutter devices`, list of devices flutter can run on

## ---> Running on Chrome//browser

> `flutter run -d chrome`, runs in chrome.
> `flutter run -d web-server`, better

## ---> Running on android

#### setting up android toolchain

1. `https://developer.android.com/studio#cmdline-tools`, download android studio or command line tools only (scroll down)
2. install packages using this path, `cd ~/Android/Sdk/cmdline-tools/latest/bin` make sure the downloads are following this path, for more details google.
3. `flutter config --android-sdk ~/Android/Sdk` telling flutter where the sdk is.

#### setting up phone and running process with cable

1. get android developer, enable USB debugging
2. connect phone to laptop, enable file transfer
3. (must have flutter installed), in terminal run `flutter doctor`, to check if flutter is ok
4. run `adb devices`, Android Device Bridge devices, if you dont see your phone, make sure step 2 is done correctly, and check if wire has any issues. `lsusb` for linux users to check in another way.
5. Final check `flutter devices`, if you see your device, cd to the project folder and `flutter run -d 192.168.0.404:5555`. your ip obviously.

## Connecting via same wifi, to run without cable

1. You need to complete step 5 from above.
2. `adb tcpip 5555`, tcpip: switches to wifi, 5555: network port that adb uses
3. `adb connect <PHONE_IP>:5555`, something like :`adb connect 192.168.0.105:5555`
4. `flutter run -d 192.168.0.404:5555`, takes a long while, can be upto 20 minutes.

---

# Cleaning / Restarting a flutter project

- when flutter path changes or you need to a full restart of your project to match updates
- `flutter clean` [deletes temporary caches, resets the project build state, safe to run anytime]
- `rm -rf .dart_tool`
- `rm -rf build`
- `rm pubspec.lock` [when dependencies get too much changed, packages conflicts]
- `flutter pub get`

- VsCode , `Ctrl+Shift+P` and `Dart: Restart Analysis Server`, this restarts the background Dart process
