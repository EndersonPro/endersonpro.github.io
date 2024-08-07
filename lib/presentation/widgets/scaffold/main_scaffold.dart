import 'package:endersonvizc/presentation/widgets/navbar/navbar.dart';
import 'package:flutter/material.dart';

import '../../constants/constants.dart';

class MainScaffold extends StatelessWidget {
  const MainScaffold({super.key, required this.child});
  final Widget child;

  @override
  Widget build(BuildContext context) {
    final currentWidth = MediaQuery.sizeOf(context).width;
    final isMinWidth = currentWidth < MIN_WIDTH;

    return Scaffold(
      appBar: isMinWidth
          ? AppBar(
              title: Text(
                "</ev>",
                style: TextStyle(
                  color: Theme.of(context).colorScheme.primary,
                  fontSize: 30,
                  fontWeight: FontWeight.w200,
                  fontStyle: FontStyle.italic,
                ),
              ),
              backgroundColor: Colors.transparent,
              // leading: ,
            )
          : null,
      body: SafeArea(
        child: Column(
          children: [
            if (!isMinWidth) const Navbar(),
            Expanded(
              child: child,
            ),
          ],
        ),
      ),
    );
  }
}
