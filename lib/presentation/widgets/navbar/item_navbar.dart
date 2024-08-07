import 'package:endersonvizc/presentation/app_provider.dart';
import 'package:endersonvizc/presentation/router.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

class ItemNavbar extends ConsumerStatefulWidget {
  const ItemNavbar({
    super.key,
    required this.text,
    required this.route,
    required this.isSelected,
  });

  final String text;
  final String route;
  final bool isSelected;

  @override
  ConsumerState<ItemNavbar> createState() => _ItemNavbarState();
}

class _ItemNavbarState extends ConsumerState<ItemNavbar> {
  bool _isHovered = false;

  @override
  Widget build(BuildContext context) {
    return MouseRegion(
      onEnter: (event) => setState(() => _isHovered = true),
      onExit: (event) => setState(() => _isHovered = false),
      child: GestureDetector(
        onTap: () {
          ref.read(currentRouteProvider.notifier).changeRoute(widget.route);
          ref.read(appRouterProvider).go(widget.route);
        },
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 8.0),
          child: Column(
            children: [
              AnimatedContainer(
                duration: const Duration(milliseconds: 200),
                child: Text(
                  widget.text,
                  style: TextStyle(
                    color: Theme.of(context).colorScheme.primary,
                    fontSize: _isHovered || widget.isSelected ? 18 : 16,
                  ),
                ),
              ),
              AnimatedContainer(
                duration: const Duration(milliseconds: 200),
                height: 2,
                width: 20,
                color: widget.isSelected
                    ? Theme.of(context).colorScheme.primary
                    : Colors.transparent,
              ),
            ],
          ),
        ),
      ),
    );
  }
}
