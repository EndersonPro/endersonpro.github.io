import 'package:endersonvizc/presentation/app_provider.dart';
import 'package:endersonvizc/presentation/router.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:google_fonts/google_fonts.dart';

import 'colors/colors.dart';

class PersonalWeb extends ConsumerWidget {
  const PersonalWeb({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final router = ref.watch(appRouterProvider);
    final themeMode = ref.watch(themeModeHandlerProvider);
    return MaterialApp.router(
      debugShowCheckedModeBanner: false,
      title: 'Enderson Vizcaino',
      routerConfig: router,
      theme: ThemeData(
        brightness: Brightness.light,
        textTheme: GoogleFonts.firaCodeTextTheme(),
      ),
      themeMode: themeMode,
      darkTheme: ThemeData(
        brightness: Brightness.dark,
        primaryColor: AppColors.sprout,
        colorScheme: const ColorScheme.dark(
          primary: AppColors.sprout,
          secondary: AppColors.sprout,
          surface: AppColors.sprout,
          error: AppColors.error,
          onPrimary: AppColors.nocturnal,
          onSecondary: AppColors.nocturnal,
          onSurface: AppColors.nocturnal,
          onError: AppColors.nocturnal,
        ),
        scaffoldBackgroundColor: AppColors.nocturnal,
        textTheme: GoogleFonts.firaCodeTextTheme(),
      ),
    );
  }
}
