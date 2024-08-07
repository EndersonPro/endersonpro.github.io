import 'package:endersonvizc/presentation/router.dart';
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';

part 'app_provider.g.dart';

@Riverpod(keepAlive: true)
class ThemeModeHandler extends _$ThemeModeHandler {
  @override
  ThemeMode build() {
    return ThemeMode.dark;
  }

  void changeThemeMode() {
    final themeModeTypes = {
      ThemeMode.light: ThemeMode.dark,
      ThemeMode.dark: ThemeMode.light,
    };
    state = themeModeTypes[state]!;
  }
}

@riverpod
bool isDarkMode(IsDarkModeRef ref) {
  return ref.watch(themeModeHandlerProvider) == ThemeMode.dark;
}

@riverpod
class CurrentRoute extends _$CurrentRoute {
  @override
  String build() {
    return AppRoutes.home;
  }

  void changeRoute(String route) {
    state = route;
  }
}
