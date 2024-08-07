import 'package:endersonvizc/presentation/widgets/profile_image/profile_image.dart';
import 'package:flutter/material.dart';

class AboutPage extends StatelessWidget {
  const AboutPage({super.key});

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(builder: (context, constraints) {
      return Column(
        mainAxisSize: MainAxisSize.max,
        children: [
          Row(
            mainAxisSize: MainAxisSize.max,
            children: [
              Expanded(
                child: SizedBox(
                  height: constraints.maxHeight,
                  child: const Center(
                    child: Hero(
                      tag: 'profile',
                      child: ProfileImage(),
                    ),
                  ),
                ),
              ),
              Expanded(
                child: SizedBox(
                  height: constraints.maxHeight,
                  child: const Center(child: Text("About Page")),
                ),
              ),
            ],
          ),
        ],
      );
    });
  }
}
