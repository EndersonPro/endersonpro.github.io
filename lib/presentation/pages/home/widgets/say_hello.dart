import 'package:flutter/material.dart';

class SayHello extends StatelessWidget {
  const SayHello({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Center(
        child: Text(
          "Say Hello",
          style: TextStyle(color: Colors.white),
        ),
      ),
    );
  }
}
