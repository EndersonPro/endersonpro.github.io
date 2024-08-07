import 'package:endersonvizc/presentation/constants/constants.dart';
import 'package:endersonvizc/presentation/pages/home/widgets/say_hello.dart';
import 'package:endersonvizc/presentation/widgets/navbar/navbar.dart';
import 'package:endersonvizc/presentation/widgets/profile_image/profile_image.dart';
import 'package:flutter/material.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(builder: (context, constraints) {
      if (constraints.maxWidth < MIN_WIDTH) {
        return SingleChildScrollView(
          child: Padding(
            padding: const EdgeInsets.symmetric(vertical: 50),
            child: Column(
              children: [
                SizedBox(
                  height: constraints.maxHeight * 0.3,
                  child: const SayHello(),
                ),
                const ProfileImage(),
              ],
            ),
          ),
        );
      }
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
                    child: SayHello(),
                  ),
                ),
              ),
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
            ],
          ),
        ],
      );
    });
  }
}
