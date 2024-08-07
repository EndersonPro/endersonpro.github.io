import 'package:endersonvizc/presentation/app_provider.dart';
import 'package:endersonvizc/presentation/router.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../constants/constants.dart';
import 'item_navbar.dart';

class Navbar extends ConsumerWidget {
  const Navbar({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final currentHeight = MediaQuery.sizeOf(context).height;
    final currentWidth = MediaQuery.sizeOf(context).width;
    final currentLocation = ref.watch(currentRouteProvider);

    // final bool isSelected = currentLocation == widget.route;

    return PreferredSize(
      preferredSize: Size.fromHeight(currentHeight * 0.1),
      child: LayoutBuilder(builder: (context, constraints) {
        final isMinWidth = constraints.maxWidth < MIN_WIDTH;
        if (isMinWidth) {
          return const SizedBox.shrink();
        }
        return Container(
          color: Colors.transparent,
          child: Row(
            children: [
              SizedBox(
                width: currentWidth * .3,
                child: Padding(
                  padding: const EdgeInsets.symmetric(
                    horizontal: 20,
                    vertical: 20,
                  ),
                  child: Text(
                    "</ev>",
                    style: TextStyle(
                      color: Theme.of(context).colorScheme.primary,
                      fontSize: 30,
                      fontWeight: FontWeight.w200,
                      fontStyle: FontStyle.italic,
                    ),
                  ),
                ),
              ),
              SizedBox(
                width: currentWidth * .6,
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    ItemNavbar(
                      text: "Home",
                      route: AppRoutes.home,
                      isSelected: currentLocation == AppRoutes.home,
                    ),
                    ItemNavbar(
                      text: "About",
                      route: AppRoutes.about,
                      isSelected: currentLocation == AppRoutes.about,
                    ),
                    ItemNavbar(
                      text: "Projects",
                      route: AppRoutes.projects,
                      isSelected: currentLocation == AppRoutes.projects,
                    ),
                    ItemNavbar(
                      text: "Experience",
                      route: AppRoutes.experience,
                      isSelected: currentLocation == AppRoutes.experience,
                    ),
                  ],
                ),
              ),
              SizedBox(
                width: currentWidth * .1,
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.start,
                  children: [
                    // Boton para realizar el cambio de tema oscuro a claro
                    IconButton(
                      icon: Icon(Icons.brightness_4_outlined),
                      color: Theme.of(context).colorScheme.primary,
                      onPressed: () {
                        ref
                            .read(themeModeHandlerProvider.notifier)
                            .changeThemeMode();
                      },
                    ),
                  ],
                ),
              ),
            ],
          ),
        );
      }),
    );
  }
}
