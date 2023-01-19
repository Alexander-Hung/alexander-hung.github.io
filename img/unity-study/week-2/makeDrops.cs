elapsedTime += Time.deltaTime;
		if (elapsedTime >= delayBetweenDrops) {
			elapsedTime = 0f;
			GameObject n = Instantiate(prefab);
			n.AddComponent(typeof(CubeScript));
		}





if(transform.position.y < 0) {
			Destroy(gameObject);
		}
