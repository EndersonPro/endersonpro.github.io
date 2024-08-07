import 'package:endersonvizc/presentation/app_provider.dart';
import 'package:endersonvizc/presentation/pages/about/about.dart';
import 'package:endersonvizc/presentation/pages/experience/experience.dart';
import 'package:endersonvizc/presentation/pages/home/home.dart';
import 'package:endersonvizc/presentation/pages/projects/projects.dart';
import 'package:endersonvizc/presentation/widgets/scaffold/main_scaffold.dart';
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';

part 'router.g.dart';

abstract class AppRoutes {
  static const home = "/";
  static const about = "/about";
  static const projects = "/projects";
  static const experience = "/experience";
}

final _rootNavigatorKey = GlobalKey<NavigatorState>();
final _shellNavigatorKey = GlobalKey<NavigatorState>();

@riverpod
GoRouter appRouter(AppRouterRef ref) {
  return GoRouter(
    navigatorKey: _rootNavigatorKey,
    routes: [
      ShellRoute(
        navigatorKey: _shellNavigatorKey,
        pageBuilder: (context, state, child) {
          return NoTransitionPage(
            child: MainScaffold(
              child: child,
            ),
          );
        },
        routes: [
          GoRoute(
            path: AppRoutes.home,
            builder: (context, state) => const HomePage(),
          ),
          GoRoute(
            path: AppRoutes.about,
            builder: (context, state) => const AboutPage(),
          ),
          GoRoute(
            path: AppRoutes.projects,
            builder: (context, state) => const ProjectsPage(),
          ),
          GoRoute(
            path: AppRoutes.experience,
            builder: (context, state) => const ExperiencePage(),
          ),
        ],
      ),
    ],
  );
}
