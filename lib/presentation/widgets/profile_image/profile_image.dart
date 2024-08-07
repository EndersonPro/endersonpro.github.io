import 'package:flutter/material.dart';

class ProfileImage extends StatelessWidget {
  const ProfileImage({super.key});

  @override
  Widget build(BuildContext context) {
    // final currentWidth = MediaQuery.sizeOf(context).width;
    const length = 500.0;
    return SizedBox(
      child: Center(
        child: Stack(
          children: [
            SizedBox(
              height: length,
              width: length,
              child: Container(
                margin: const EdgeInsets.all(70),
                decoration: BoxDecoration(
                  shape: BoxShape.rectangle,
                  border: Border.all(
                    color: Colors.white,
                    width: 4,
                  ),
                ),
              ),
            ),
            Positioned(
              top: -100,
              left: -100,
              child: SizedBox(
                height: length,
                width: length,
                child: Image.asset(
                  'assets/images/profile.jpg',
                  fit: BoxFit.cover,
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
