﻿using System;
using System.Collections;
using System.Collections.Generic;
using DCL.Helpers;
using UnityEngine;

namespace DCL.Components {
  [Serializable]
  public class ConeShapeModel {
    public float radiusTop = 0f;        // Cone/Cylinder
    public float radiusBottom = 1f;     // Cone/Cylinder
    public float segmentsHeight = 1f;   // Cone/Cylinder
    public float segmentsRadial = 36f;  // Cone/Cylinder
    public bool openEnded = false;      // Cone/Cylinder
    public float? radius;               // Cone/Cylinder
    public float arc = 360f;            // Cone/Cylinder
  }

  public class ConeShape : BaseShape<ConeShapeModel> {
    protected override void Awake() {
      base.Awake();

      if (meshFilter == null) {
        meshFilter = meshGameObject.AddComponent<MeshFilter>();
      }

      if (meshRenderer == null) {
        meshRenderer = meshGameObject.AddComponent<MeshRenderer>();
      }

      meshRenderer.sharedMaterial = Resources.Load<Material>("Materials/Default");
    }

    public override IEnumerator ApplyChanges() {
      meshFilter.mesh = PrimitiveMeshBuilder.BuildCone(50, data.radiusTop, data.radiusBottom, 2f, 0f, true, false);

      return null;
    }
  }
}
